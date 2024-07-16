import {Component} from "@angular/core";
import versionInfo from "./version.json";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'demo-app',
    templateUrl: './demo-app.component.html',
    standalone: true,
    imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class DemoAppComponent {
    version = versionInfo.version;
}

