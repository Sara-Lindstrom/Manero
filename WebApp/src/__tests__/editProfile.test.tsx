import {render, fireEvent, screen, getByTestId} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditProfileSection from '../sections/EditProfileSection';


const user = 
        {
          id: 1,
          name: "Adam",
          email: "adam@domain.com",
          phone: "087267687435",
          location: "Sweden",
          imgUrl: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
        }


describe('EditProfileSection', () => {

    test('renders EditProfileSection component', () => {
        render(<BrowserRouter><EditProfileSection user={user} /></BrowserRouter>);
        
        // Kontrollera att texter "Name, Email, Phone Number and location" visas
        const element1 = screen.getByText(/NAME/i);
        const element2 = screen.getByText(/Email/i);
        const element3 = screen.getByText(/Phone Number/i);
        const element4 = screen.getByText(/Location/i);          
        expect(element1).toBeTruthy();
        expect(element2).toBeTruthy();
        expect(element3).toBeTruthy();
        expect(element4).toBeTruthy();


        // Kontrollera att "Save Changes"-knappen finns
        const saveButton = screen.getByText(/SAVE CHANGES/i);
        expect(saveButton).toBeTruthy();



        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => jest.fn(() => '/viewProfile'),
          }));
        
      });

      test('Button functionality with valid new data', () => {
        render(<BrowserRouter><EditProfileSection user={user} /></BrowserRouter>);
        
        // Simulate user entering a valid new password
        const newNamedInput = screen.getByLabelText('NEW NAME');
        fireEvent.change(newNamedInput, { target: { value: user.name } });

        const newEmailInput = screen.getByLabelText('NEW EMAIL');
        fireEvent.change(newEmailInput, { target: { value: user.email } });

        const newPhoneNumberInput = screen.getByLabelText('NEW PHONENUMBER');
        fireEvent.change(newPhoneNumberInput, { target: { value: user.phone } });

        const newLocationInput = screen.getByLabelText('NEW LOCATION');
        fireEvent.change(newLocationInput, { target: { value: user.location } });

        // Find the button and simulate a click
        const doneButton = screen.getByText(/SAVE CHANGES/i);
        fireEvent.click(doneButton);
    
       
      });
    

})



    