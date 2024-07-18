import React, { useEffect } from "react";
import { CanvasSpace, Create, Num, Pt, Particle, World, Rectangle } from "pts";

const ParticleAnimation = () => {
  useEffect(() => {
    const handlePts = () => {
      const space = new CanvasSpace("#pt");
      const form = space.getForm();
      let world;

      space.background = "#897143"; // Set the background color here

      const getTextBoundaries = () => {
        const title = document.querySelector(".title");
        const subtitle = document.querySelector(".subtitle");
        if (title && subtitle) {
          const titleRect = title.getBoundingClientRect();
          const subtitleRect = subtitle.getBoundingClientRect();
          return [
            Rectangle.fromTopLeft([titleRect.left, titleRect.top], [titleRect.width, titleRect.height]),
            Rectangle.fromTopLeft([subtitleRect.left, subtitleRect.top], [subtitleRect.width, subtitleRect.height]),
          ];
        }
        return [];
      };

      // Manually check if a circle intersects a rectangle
      const rectangleCircleIntersect = (rect, particle) => {
        const circle = particle.position;
        const r = particle.radius;

        if (!circle) {
          return false; // Ensure the circle position is defined
        }

        // Find the closest point to the circle within the rectangle
        const closestPt = new Pt(
          Num.clamp(circle.x, rect.topLeft.x, rect.bottomRight.x),
          Num.clamp(circle.y, rect.topLeft.y, rect.bottomRight.y)
        );

        // Calculate the distance between the circle's center and this closest point
        const distance = circle.$subtract(closestPt).magnitude();

        // If the distance is less than the circle's radius, an intersection occurs
        return distance < r;
      };

      const checkCollision = (particle, boundaries) => {
        for (let rect of boundaries) {
          if (rectangleCircleIntersect(rect, particle)) {
            particle.velocity.scale(-1);
            return;
          }
        }
      };

      space.add({
        start: (bound) => {
          world = new World(space.innerBound, 1, 0);
          let pts = Create.distributeRandom(space.innerBound, 20);

          for (let i = 0; i < pts.length; i++) {
            let p = new Particle(pts[i]).size(i === 0 ? 30 : 3 + Math.random() * space.size.x / 50);
            p.hit(Num.randomRange(-50, 50), Num.randomRange(-25, 25));
            world.add(p);
          }

          world.particle(0).lock = true;
        },

        animate: (time, ftime) => {
          const textBoundaries = getTextBoundaries();

          world.drawParticles((p, i) => {
            let color = i === 0 ? "#fff" : ["#343A40", "#ff7f50"][i % 4];
            form.fillOnly(color).point(p, p.radius, "circle");
            if (i !== 0) {
              checkCollision(p, textBoundaries);
            }
          });

          world.update(ftime);
        },

        action: (type, px, py) => {
          if (type === "move") {
            world.particle(0).position = new Pt(px, py);
          }
        },

        resize: (bound) => {
          if (world) world.bound = space.innerBound;
        },
      });

      // let the space follow mouse pointer but don't display on touch devices
      if (window.matchMedia("(hover: hover)").matches) {
        space.bindMouse().play();
      } else {
        space.play();
      }

      return () => {
        space.stop();
      };
    };

    handlePts();
  }, []);

  return <canvas id="pt" style={{ position: "absolute", top: 80, left: 0, width: "100%", height: "100%" }} />;
};

export default ParticleAnimation;