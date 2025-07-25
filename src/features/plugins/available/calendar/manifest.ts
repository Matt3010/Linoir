import {PluginManifest} from '../../entities';
import {KioskableMixin} from '../../models';
import {CalendarPlugin} from './CalendarPlugin';
import {RenderType} from '../../../render/enums/render-type';

export const manifest: PluginManifest[] = [
  {
    key: 'calendar',
    class: KioskableMixin(CalendarPlugin),
    variants: [
      {
        scope: RenderType.Admin,
        UIComponentClassName: 'AdminCalendarComponent',
        loader: () =>
          import(
            './scopes/admin/admin-calendar.component'
            ),
      },
      {
        scope: RenderType.Kiosk,
        UIComponentClassName: 'KioskCalendarComponent',
        loader: () =>
          import(
            './scopes/kiosk/kiosk-calendar.component'
            ),
      },
    ],
  },
]
