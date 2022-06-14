


describe('Book cases', () => {
   
    it('Verify type data book when create', async () => {
        
        const book = {
            title: "livro teste2",
            pcompany: "Editora teste",
            language: "Português",
            qpage: "200",
            isbn: "43234288923",
            rented: false,
            user_id: 1
            
        }
        
        expect(typeof book.title).toBe('string');
        expect(typeof book.pcompany).toBe('string');
        expect(typeof book.language).toBe('string');
        expect(typeof book.isbn).toBe('string');
        expect(typeof book.rented).toBe('boolean');
        expect(typeof book.user_id).toBe('number');
    
    });



       
    it('Verify type data book when update', async () => {
        
        const book = {
            title: "livro teste2",
            pcompany: "Editora teste",
            language: "Português",
            qpage: "200",
            isbn: "43234288923",
            user_id: 1
            
        }
        
        expect(typeof book.title).toBe('string');
        expect(typeof book.pcompany).toBe('string');
        expect(typeof book.language).toBe('string');
        expect(typeof book.isbn).toBe('string');
     
        expect(typeof book.user_id).toBe('number');
    
    });

           
    




   
  
    
  });