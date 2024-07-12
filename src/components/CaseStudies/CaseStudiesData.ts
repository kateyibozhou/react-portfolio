import { CaseStudyType } from './CaseStudyType';
import evpnIncreaseUserRenewalRate from './ProductUX/ExpressVPNIncreaseUserRenewalRate';
import evpnMobileConversion from './ProductUX/ExpressVPNMobileConversionOptimisation';
import dBSInfoArch from './ProductUX/DBSInfoArch';
import evpnEnterpriseDashboard from './ProductUX/ExpressVPNEnterpriseDashboard';
import shellAPAC from './ProductUX/ShellAPAC';
import shellMalaysia from './ProductUX/ShellMalaysia';
import philipsB2BGTM from './Service/PhilipsB2BGTM';
import philipsB2CVacuum from './Service/PhilipsB2CVacuumLaunch';
import xiamenHospital from './Service/XiamenHospital';
import rejoiceBranding from './Branding/Rejoice';
import sephoraCampaign from './Branding/Sephora';
import sKII from './Branding/SKII';
import evpnEvangeliseCustomerJourneyMaps from './ProductUX/EvangeliseUseOfCustomerJourneyMaps';

const caseStudies: Record<string, CaseStudyType> = {
  'evpn-increase-user-renewal-rate': evpnIncreaseUserRenewalRate,
  'evpn-mobile-conversion': evpnMobileConversion,
  'dbs-info-arch': dBSInfoArch,
  'evpn-enterprise-dashboard': evpnEnterpriseDashboard,
  'shell-apac': shellAPAC,
  'shell-malaysia': shellMalaysia,
  'philips-gtm': philipsB2BGTM,
  'philips-vacuum': philipsB2CVacuum,
  'xiamen-hospital': xiamenHospital,
  'rejoice-branding': rejoiceBranding,
  'sephora-campaign': sephoraCampaign,
  'skii': sKII,
  'evpn-evangelise-customer-journey-maps': evpnEvangeliseCustomerJourneyMaps,
};

export default caseStudies;