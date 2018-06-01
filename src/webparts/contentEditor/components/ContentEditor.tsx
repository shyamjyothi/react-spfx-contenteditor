import * as React from 'react';
import styles from './ContentEditor.module.scss';
import { IContentEditorProps } from './IContentEditorProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ContentEditor extends React.Component<IContentEditorProps,any> {
  constructor(props) {
    super(props);
    this.state = { __html: this.props.content}
  }

  public componentDidMount() {
    //loads the CSS external file
    if(this.props.csslink != '') {
      const element = document.createElement('link');
      element.type = 'text/css';
      element.rel = 'stylesheet';
      element.href = this.props.csslink;
      document.head.appendChild(element);
    }
    //gets the CSS and binds it inline
    if(this.props.css != '') {  
       const css = document.createElement('style');
      css.type = 'text/css';    //csss.async = true;
      css.innerHTML = escape(this.props.css);
      document.head.appendChild(css);
    }
    
  }
  
  //renders the outer div and custom HTML is assigned as the innerHTML
  public render(): React.ReactElement<IContentEditorProps> {
    //this.componentDidMount();
    return (
      <div className={ styles.contentEditor } id='dynamic_div'>
        <div className={ styles.container } dangerouslySetInnerHTML={{__html:(this.props.content)}}>     
        </div>         
      </div>
    );
  }
}
