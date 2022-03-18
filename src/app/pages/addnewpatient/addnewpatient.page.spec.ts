import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { AddnewpatientPage } from './addnewpatient.page'

describe('AddnewpatientPage', () => {
  let component: AddnewpatientPage
  let fixture: ComponentFixture<AddnewpatientPage>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewpatientPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(AddnewpatientPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
