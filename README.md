# keycloak-realm-management
quick proof of concept to add service client's to a Keycloak realm  

1. Get the secret for the keycloak-realm-admin client from me.
2. Update example.js
3. `> node example.js`
4. Use the results to fetch a token, examine it in jwt.io, pay attention to the "resource_access" property.  You should see the common services listed with all their roles.


