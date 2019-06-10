A callback URL is a URL in your application where Auth0 redirects the user after they have authenticated.

The callback URL for your app must be whitelisted in the Allowed Callback URLs field in your Application Settings. If this field is not set, users will be unable to log in to the application and will get an error.

--------------------

A logout URL is a URL in your application that Auth0 can return to after the user has been logged out of the authorization server. This is specified in the returnTo query parameter.

The logout URL for your app must be whitelisted in the Allowed Logout URLs field in your Application Settings. If this field is not set, users will be unable to log out from the application and will get an error.

Configure Allowed Web Origins
You need to whitelist the URL for your app in the Allowed Web Origins field in your Application Settings. If you don't whitelist your application URL, the application will be unable to automatically refresh the authentication tokens and your users will be logged out the next time they visit the application, or refresh the page.