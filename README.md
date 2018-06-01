# react-spfx-contenteditor
This is a custom reusable SharePoint Framework ClientSide Webpart which acts as the same Content Editor WebPart. The Webpart can be configured with the External CSS reference, inline CSS and HTML Content. Based on the data configured to the Webpart, the Webpart shall render the HTML Content to the Modern SharePoint Page.
The WebPart was developed with React as UI Framework using Typescript. (NodeJS & VSCode).
 ## Configuration Settings
The following configuration fields are available in the webpart
###### CSS Link – The link to absolute path of the CSS. If more than one CSS files are present, we need to separate it by “;”
###### Style – Inline CSS elements can be added.
###### HTML – The HTML content that need to be rendered.

In the below configuration, I have configured JQuery DataTabes CSS and also added inline CSS to hide the Page Header and Feedback section of the Modern Page. The HTML Content is the HTML Markup of the Data that need to rendered.

![alt text](https://github.com/shyamjyothi/react-spfx-contenteditor/blob/master/asset/asset.png)



 
