import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class AlbumsService {
    constructor(
        private httpClient: HttpClient,
    ) {}

    getAlbums() {
        return this.httpClient.get(`${API}/albums`);
    }
}
