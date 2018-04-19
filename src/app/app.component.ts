//our root app component
import {Component, NgModule, ElementRef} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
declare var vis: any;
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
    <div class="network"></div>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  constructor(private element: ElementRef) {
    this.name = 'Angular2'
  }

  ngOnInit() {

    // Create a DataSet (allows two way data-binding)
    var items = new vis.DataSet([
      {id: 1, content: 'item 1', start: '2013-04-20'},
      {id: 2, content: 'item 2', start: '2013-04-14'},
      {id: 3, content: 'item 3', start: '2013-04-18'},
      {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
      {id: 5, content: 'item 5', start: '2013-04-25'},
      {id: 6, content: 'item 6', start: '2013-04-27'}
    ]);

    // Configuration for the Network
    var options = {};

    // Create a Network
    var nodes = [

      {

        id:"a",

        label:"A"

      },

      {

        id:"b",

        label:"B"

      }

    ];

    var edges = [

      {

        from:"a",

        to:"b"

      }

    ];


    var container = document.querySelector('.network');
    var data = {
      nodes: nodes,
      edges: edges
    };

    var network = new vis.Network(container, data, options);
  }

}
