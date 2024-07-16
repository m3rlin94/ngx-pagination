import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";


@Component({
    selector: 'basic-example',
    templateUrl: './basic-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgxPaginationModule]
})
export class BasicExampleComponent {
    @Input('data') meals: string[] = [];
    page: number = 1;
}