


describe('User cases', () => {
   
    it('Verify type data user when create', async () => {
        
        const user = {
            name: "arthur lima",
            email: "arthur@email.com",
            password: "123123",
            provider: false
        }
        
        expect(typeof user.name).toBe('string');
        expect(typeof user.email).toBe('string');
        expect(typeof user.password).toBe('string');
        expect(typeof user.provider).toBe('boolean');
    
    });



   
  
    
  });