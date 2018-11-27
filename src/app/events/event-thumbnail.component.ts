import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getClassByTime()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div>
        <span>Location: {{event?.location.address}}</span>
        <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
      </div>
    </div>
  `,
  styles: [`
  .thumbnail { min-height: 210px; }
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb; }
  .meat { color: greenyellow !important; }
  .turkey { font-weight: bold; }
  `]
})

export class EventThumbnailComponent {
  @Input() event:any

  getClassByTime() {
    const isEarlyStart = this.event.time && this.event.time == '8:00 am'
    if (isEarlyStart) {
      return 'meat turkey'
    }
    return ''
  }
}