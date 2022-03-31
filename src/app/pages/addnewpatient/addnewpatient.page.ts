import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-addnewpatient',
  templateUrl: './addnewpatient.page.html',
  styleUrls: ['./addnewpatient.page.scss'],
})
export class AddnewpatientPage implements OnInit {
  // constructor(private router: Router) { }
  constructor(public alertController: AlertController) {}

  name = ''
  address = ''
  email = ''
  phone = ''
  emergencyContact = ''
  age = ''

  ngOnInit() {}

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'User Addedd Successfully',
      // message: 'Enter all the Parameters',
      buttons: ['OK'],
    })

    await alert.present()
  }

  addnewpatient() {
    // this.router.navigate(['home/patientinfo'])

    const URL = 'https://patient-mgmt-rest.herokuapp.com/patient'

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
      name: this.name,
      address: this.address,
      email: this.email,
      phone: this.phone,
      emergencyContact: this.emergencyContact,
      age: this.age,
      id: Math.floor(Math.random() * 99999)
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    }
    // redirect: 'follow',

    fetch(URL, requestOptions)
      .then(response => response.text())
      .then(result => {
        this.presentSuccessAlert()
        console.log(result)
      })
      .catch(error => {
        // Alert.alert('Error', 'Something went wrong', [{text: 'OK'}]);
        console.log('error', error)
      })
  }
}
