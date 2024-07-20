import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  title = 'tik-talk';

  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  imgUrl!: string;

  constructor() {
    this.profileService.http
      .get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts')
      .subscribe((v) => {
        this.profiles = v;
      });
  }
}
