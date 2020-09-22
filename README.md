# Why Liferay APIs are awesome

Slides and code for Liferay's [/dev/24](https://liferay.dev/24) talk by [Javier Gamarra](https://twitter.com/nhpatt).

The idea is to a simple TikTok clone like this:

<img src="demo.gif">

-> Tested in 7.3 but Headless code is backported to 7.2 and 7.1.

## How to install

1. Launch your Liferay instance
2. Clone this repo and launch *npm i*
3. Run *npm start* and **Play! :)**

## Steps

1. Learn the existing APIs with **/o/api** && **/o/openapi** and the documentation
2. Show and create GIFs with the **REST APIs**
3. Use **GraphQL**
    1. Installing Apollo: _npm install @apollo/client graphql_
    2. Create an [Apollo client](https://www.apollographql.com/docs/react/get-started/)
    3. Use _useQuery_
4. Embed image with **NestedFields** & _'data:video/mp4;base64,'_
5. Conditionally render elements of the UI based on backend permissions with **actions**
6. Store and retrieve documents and web contents in the new **Asset libraries**
7. Return any asset with **ContentElements API**
8. Transform your results with **filter, search, sort and flatten**
9. Return or create **all translations** & _window.navigator.language_ from _chrome://settings/languages#lang_
10. Aggregate information with **facets**
11. Improve performance -> **fields** && **restrictFields**
12. Disable endpoints in **headless settings**
13. Add new fields using WebContent or **RelatedContents** or **CustomFields** -> **API extensibility** 
14. Let's define our API, **REST Builder**

## Things we have to mention!

1. Batch framework
2. More GraphQL relationships (children, parent, element)
3. Headless Admin Content
4. APIs: New APIs or improvements: document types & metadata, navigation menus, move documents...
5. Vulcan: Automatic transactions, contextProviders, Bean Validation, Multipart...
6. REST Builder: Permissions endpoints (& ViewableBy)
7. Headless: Many more things... Java client, versioned GraphQL endpoint...

## What's in the future?

Remember that you don't have to wait for 7.4, we do rolling releases!

* New identifier for APIs
* Webhooks
* Server side events/GraphQL subscriptions
* Layouts/Pages API
* Admin APIs
* Lazy fields
* **_YOUR IDEA_**

## Questions?

* ...
* ...
* ...

### Common questions?

* *How do I filter?* -> see [here](https://help.liferay.com/hc/es/articles/360036343152-Filter-Sort-and-Search). OData syntax is complex, so ask us in the [community slack](https://liferay-community.slack.com/archives/CUCUYB1EE/p1599569152001000).
* *Liferay API Versioning?* -> we won't break (again, sorry) the existing APIs at least until 7.4.
* *Auth, if I'm serving the application outside Liferay?* -> same as Liferay Portal, whatever you are using there like OAuth, Basic Auth, Session, but recommended is OAuth.
* *Service Access Quotas?* -> interesting, ping us! (you can use an API Gateway but we can talk).
* *CORS?* -> yeah, default for GraphQL but has to be configured for APIs. Remember/understand what CORS is or should: a configuration only for development because you are using different IPs in a browser request. Doesn't apply if we serve portlets, and it's a dev issue, should not be a production issue.

## Links

* [http://bit.ly/headless24](http://bit.ly/headless24) Slides!
* [Headless channel in Liferay Community Slack](https://liferay-community.slack.com/archives/CUCUYB1EE/p1599569152001000)
* [OLD Headless APIs documentation](https://help.liferay.com/hc/es/articles/360028726992-Headless-REST-APIs)
* [New Liferay Learn documentation](https://learn.liferay.com/dxp/7.x/en/headless-delivery/content_delivery_apis.html)
* [SwaggerHub](https://app.swaggerhub.com/organizations/liferayinc) (but use **/o/api**)

## Thanks

* TikTok React template from [CleverProgrammers](https://github.com/CleverProgrammers/tiktok-clone/commits/master)
* Sample videos from [Vertical Video: Current State of the Art](http://www.exit109.com/~dnn/clips/VerticalVideo.html)
* Sample TikToks by:
    * malinoisdog, "Like watching the plot, still like watching me fly #dog #fly #fyp", Wrecking Ball(fast ver.) - Miley Cyrus
    * charlidamelio, "THANK YOU ALL SO SO SO MUCH FOR 86 MILLION!!!! @mishagabriel @rexkline @breakthefloor", Move Ya Hips - A$AP Ferg
    * guille_what, "¿Cuantos metros crees que son?🚀", Obnimi - Callmearco Remix - mattia
    * thesupercole, "Savannah might’ve gone into labor making this...🤰🏼 ", Love Story Discolines - EthanIsHung
    * youneszarou, "Is this insane? #yzfamily #foryoupage #fürdich #fyp", Still Don't Know My Name - Labrinth