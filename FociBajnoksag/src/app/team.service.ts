import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable, of, retry } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  getLaligaTeams(): Observable<Array<Team>>{
    return this.afs.collection<Team>('Teams').valueChanges();
  }

  getSeriaATeams(): Observable<Array<Team>>{
    return this.afs.collection<Team>('SeriaATeams').valueChanges();
  }

  getBundesligaTeams(): Observable<Team[]>{
    return this.afs.collection<Team>('BundesligaTeams').valueChanges();
  }
  getLigue1Teams(): Observable<Team[]>{
    return this.afs.collection<Team>('Ligue1Teams').valueChanges();
  }
  getPremierLeagueTeams(): Observable<Team[]>{
    return this.afs.collection<Team>('PremierLeagueTeams').valueChanges();
  }

  addBundesligaTeam(team: Team){
    team.id = this.afs.createId();
    return this.afs.collection<Team>("BundesligaTeams").doc(team.id).set(team);
  }

  getBundesligaTeam(id: string){
    return this.afs.collection<Team>("BundesligaTeams", ref => ref.where('id', '==', id)).valueChanges();
  }

  updateBundesligaTeam(team: Team){
    return this.afs.collection<Team>("BundesligaTeams").doc(team.id).set(team);
  }

  deleteBundesligaTeam(id: string){
    return this.afs.collection<Team>("BundesligaTeams").doc(id).delete();
  }

  addLaligaTeam(team: Team){
    team.id = this.afs.createId();
    return this.afs.collection<Team>("Teams").doc(team.id).set(team);
  }

  getLaligaTeam(id: string){
    return this.afs.collection<Team>("Teams", ref => ref.where('id', '==', id)).valueChanges();
  }

  updateLaligaTeam(team: Team){
    return this.afs.collection<Team>("Teams").doc(team.id).set(team);
  }

  deleteLaligaTeam(id: string){
    return this.afs.collection<Team>("Teams").doc(id).delete();
  }

  addLigue1Team(team: Team){
    team.id = this.afs.createId();
    return this.afs.collection<Team>("Ligue1Teams").doc(team.id).set(team);
  }

  getLigue1Team(id: string){
    return this.afs.collection<Team>("Ligue1Teams", ref => ref.where('id', '==', id)).valueChanges();
  }

  updateLigue1Team(team: Team){
    return this.afs.collection<Team>("Ligue1Teams").doc(team.id).set(team);
  }

  deleteLigue1Team(id: string){
    return this.afs.collection<Team>("Ligue1Teams").doc(id).delete();
  }

  addPremierLeagueTeam(team: Team){
    team.id = this.afs.createId();
    return this.afs.collection<Team>("PremierLeagueTeams").doc(team.id).set(team);
  }

  getPremierLeagueTeam(id: string){
    return this.afs.collection<Team>("PremierLeagueTeams", ref => ref.where('id', '==', id)).valueChanges();
  }

  updatePremierLeagueTeam(team: Team){
    return this.afs.collection<Team>("PremierLeagueTeams").doc(team.id).set(team);
  }

  deletePremierLeagueTeam(id: string){
    return this.afs.collection<Team>("PremierLeagueTeams").doc(id).delete();
  }

  addSeriaATeam(team: Team){
    team.id = this.afs.createId();
    return this.afs.collection<Team>("SeriaATeams").doc(team.id).set(team);
  }

  getSeriaATeam(id: string){
    return this.afs.collection<Team>("SeriaATeams", ref => ref.where('id', '==', id)).valueChanges();
  }

  updateSeriaATeam(team: Team){
    return this.afs.collection<Team>("SeriaATeams").doc(team.id).set(team);
  }

  deleteSeriaATeam(id: string){
    return this.afs.collection<Team>("SeriaATeams").doc(id).delete();
  }

  constructor(private afs: AngularFirestore) { }
}
