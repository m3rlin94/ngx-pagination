import {ChangeDetectionStrategy, Component, Input} from "@angular/core"
import {PaginationInstance, NgxPaginationModule} from '@m3rlin94/ngx-pagination';

@Component({
    selector: 'custom-template-example',
    templateUrl: './custom-template-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgxPaginationModule]
})
export class CustomTemplateExampleComponent {

    @Input('data') meals: string[] = [];

    public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 10,
        currentPage: 1
    };
}
