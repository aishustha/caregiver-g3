import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { AddpatientinfoPage } from './addpatientinfo.page'

describe('AddpatientinfoPage', () => {
  let component: AddpatientinfoPage
  let fixture: ComponentFixture<AddpatientinfoPage>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddpatientinfoPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(AddpatientinfoPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
