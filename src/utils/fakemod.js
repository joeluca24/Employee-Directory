
import Faker from "faker";




var fakeArray
var randomName = Faker.name.findName(); // Rowan Nikolau
fakeArray = []
var i;
for (i = 0; i < 100; i++) {
    var  fakeobj = {
        email: Faker.internet.email(),
        phoneNumber: Faker.phone.phoneNumber(),
        image: Faker.image.imageUrl(),
        name:Faker.name.findName()
        }
        fakeArray.push(fakeobj);
}
// email,phone number, image , name first last.
var  fakeobj = {
email: Faker.internet.email(),
phoneNumber: Faker.phone.phoneNumber(),
image: Faker.image.imageUrl(),
name:Faker.name.findName()
}

fakeArray.push(fakeobj);










export default fakeArray;