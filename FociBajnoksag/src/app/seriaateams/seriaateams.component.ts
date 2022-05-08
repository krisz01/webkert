import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-seriaateams',
  templateUrl: './seriaateams.component.html',
  styleUrls: ['./seriaateams.component.scss']
})
export class SeriaateamsComponent implements OnInit {

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
    this.teamService.getSeriaATeams().subscribe((data: Array<Team>) => {
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
    this.teamService.addSeriaATeam(this.teamsForm.value).then(_ => {
      console.log(this.teamsForm.value);
    }).catch(error => {
      console.log(error);
    })
  }

  deleteTeam(id: string){
    this.teamService.deleteSeriaATeam(id).then(_ => {

    }).catch(error => {
      console.log(error);
    })
  }

}
