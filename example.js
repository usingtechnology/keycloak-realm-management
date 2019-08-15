const RealmAdminService = require('./realmAdminSvc');
const ServiceClientManager = require('./serviceClientMgr');

const realmConfig = {
  realmId: '98r0z7rz',
  realmBaseUrl: 'https://sso-dev.pathfinder.gov.bc.ca',
  clientId: 'keycloak-realm-admin',
  clientSecret: 'ask me what the secret is...'
};

const configForm = {
  applicationAcronym: '_abc',
  applicationName: 'Letters',
  applicationDescription: 'It is as easy as one-two-three',
  commonServices: ['cmn-srv-ex-a', 'cmn-srv-ex-b']
};

const dev = new RealmAdminService(realmConfig);
const mgr = new ServiceClientManager(dev);

const example = {
  run: async() => {
    let c = await mgr.manage(configForm);
    console.log(c);
  }
};

example.run();

