import { TestBed } from "@angular/core/testing";

import { LoginService } from "./login.service";

describe ('LoginService', () => {
    let service: LoginService;

    beforeEach(()=> {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoginService);
    });

    it('should be create', ()=> {
        expect(service).toBeTruthy();
    });
});