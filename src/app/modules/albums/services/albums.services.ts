import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "src/environments/environment";
import { Album } from "@albums/components/dashboard/dashboard.component";

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

    createAlbum(albumTitle: string) {
        return this.httpClient.post(`${API}/albums`,
            {
                title: albumTitle,
                userId: 1,
            }
        );
    }

    editAlbum(album: Album) {
        return this.httpClient.put(`${API}/albums/${album.id}`,
            {
                ...album,
            }
        );
    }

    deleteAlbum(albumId: number) {
        return this.httpClient.delete(`${API}/albums/${albumId}`);
    }
}
