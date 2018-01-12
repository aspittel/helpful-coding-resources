import { Component, OnInit } from '@angular/core';

import { Resource } from '../resource';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent implements OnInit {
  resources: Resource[];
  initialResources: Resource[];
  showSearch: boolean;

  constructor(private resourceService: ResourcesService) { }

  ngOnInit() {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources()
        .subscribe(resources => {
          this.resources = resources;
          this.initialResources = resources;
        });
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  search(val): void {
    this.resources = this.initialResources.filter(resource => {
      return resource.Tags.some(tag => {
        return tag.toLowerCase().startsWith(val.toLowerCase());
      });
    });
  }
}
