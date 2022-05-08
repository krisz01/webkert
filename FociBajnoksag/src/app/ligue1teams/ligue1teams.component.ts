import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-ligue1teams',
  templateUrl: './ligue1teams.component.html',
  styleUrls: ['./ligue1teams.component.scss']
})
export class Ligue1teamsComponent implements OnInit {
  teams?: Array<Team>;
  addteam: boolean = false;

  createForm(model: Team) {
    let formGroup = this.fb.group(model);
    return formGroup;
  }

  teamsForm = this.createForm({
    id: '',
    name: '',
    win: 0,
    lose: 0,
    draw: 0,
    goalScored: 0,
    goalConceed: 0,
    points: 0
  });

  constructor(private teamService: TeamService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.teamService.getLigue1Teams().subscribe((data: Array<Team>) => {
      this.teams = data;
      this.teams.sort((a, b) => (a.points > b.points) ? -1 : 1);
    });
  }

  viewAddTeam(){
    if(!this.addteam){
      this.addteam = true;
    }
    else{
      this.addteam = false;
    }
  }

  AddTeam(){
    this.teamService.addLigue1Team(this.teamsForm.value).then(_ => {
      console.log(this.teamsForm.value);
    }).catch(error => {
      console.log(error);
    })
  }

  deleteTeam(id: string){
    this.teamService.deleteLigue1Team(id).then(_ => {

    }).catch(error => {
      console.log(error);
    })
  }

}
