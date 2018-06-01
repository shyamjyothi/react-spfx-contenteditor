import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox
} from '@microsoft/sp-webpart-base';

//import * as strings from 'ContentEditorWebPartStrings';
import ContentEditor from './components/ContentEditor';
import { IContentEditorProps } from './components/IContentEditorProps';

export interface IContentEditorWebPartProps {
  css: string;
  content: string;
  //js: string;
  csslink: string;
  //jslink: string;
}

export default class ContentEditorWebPart extends BaseClientSideWebPart<IContentEditorWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IContentEditorProps > = React.createElement(
      ContentEditor,
      {
        css: this.properties.css,
        content: this.properties.content,
        //js: this.properties.js,
        csslink: this.properties.csslink,
        //jslink : this.properties.jslink
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Configure Content Editor'
          },
          groups: [
            {
              groupName: "Webpart Properties",
              groupFields: [
                PropertyPaneTextField('csslink', {                 
                  label: 'CSS Link'
                }),
                PropertyPaneTextField('css', {
                  label: 'Style',
                  multiline: true
                }),
                PropertyPaneTextField('content', {
                  label: 'HTML Content',
                  multiline: true
                })
                
              ]
            }
          ]
        }
      ]
    };
  }
}
