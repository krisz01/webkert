import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  @Input() team?: Team;
  page: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.page = this.route.snapshot.params['page'];
    console.log(this.page);
    if(this.page == 'laligateams'){
      this.teamService.getLaligaTeam(String(id)).subscribe((data: Array<Team>) => {
        this.team=data[0];
        return;
      });
    }
    if(this.page == 'ligue1teams'){
      this.teamService.getLigue1Team(String(id)).subscribe((data: Array<Team>) => {
        console.log(data);
        this.team=data[0];
        return;
      });
    }
    if(this.page == 'bundesligateams'){
      this.teamService.getBundesligaTeam(String(id)).subscribe((data: Array<Team>) => {
        console.log(data);
        this.team=data[0];
        return;
      });
    }
    if(this.page == 'premierleagueteams'){
      this.teamService.getPremierLeagueTeam(String(id)).subscribe((data: Array<Team>) => {
        console.log(data);
        this.team=data[0];
        return;
      });
    }
    if(this.page == 'seriaateams'){
      this.teamService.getSeriaATeam(String(id)).subscribe((data: Array<Team>) => {
        console.log(data);
        this.team=data[0];
        return;
      });
    }
    
  }

  updateTeam(){
    
  }

  goBack(): void {
    this.location.back();
  }

}
