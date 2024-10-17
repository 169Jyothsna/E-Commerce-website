import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        { id: 1, name: 'Puma Scorch Whizz Street Running Shoes For Men', price: 2115, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMK2P7YZdYnFWTGAMcJRVgzR6-tsiB2fa5AbnZZQ68UMfTv4I-LcUV4DH_RTHY6ZzHKeSoKnHCCpwbc37QSGpHEnKo48on2g5CZFbvajg' },
        { id: 2, name: 'Adidas Laufen Speed M Running Shoes For Men', price: 1920, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvVzZ6cDtXCQRLTi2MVcYOuwhzIF4RhRwcCBAOp7-DR55cXrhM-Cfj95RwBG9E32fou0-ZCTthh4IwXr4UuKPYJ0r0f1wlsntVuda6fGgfpg79PDds-YFXaQ' },
        { id: 3, name: 'Nike Quest 5 Running Shoes For Women', price: 5665, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHu0NaRG5bqWIPnaNek2035lhZW3PMkFZY_Tl6pLfK4-c3DttwiyvynUNvvhOsGu1tYCshArqPSEXsnQLakirpGkMpgCasMlyqWWJchm9q7JG8BFE9oTlxKQ' },
        { id: 4, name: "Bata Women's Wonder E 24 Sport Shoes", price: 899, img: 'https://m.media-amazon.com/images/I/61wgVskW9XL._SY625_.jpg' },
        { id: 5, name: 'U.S. POLO ASSN. Hollie Women Printed Sneakers', price: 2190, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRn9z_ACeha_4qkaAhqZ7xOs4GGRdp8jjktFJ-0zyMBAJWplLK4WO3S33zWS6j0dR79-lG0vGOWPkfegSmk8U5iZtAPnO7YsZQVtuzOBRnxR6bJx9PNUSZXCYs' },
        { id: 6, name: 'Red Tape ETPU Athleisure Shoes for Men', price: 1799, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5wE26AbYXofQUMCOPs6-cPIPCFmA59a2DGUHpUzKX2S-6LV_iPzO-ntfNkFBUlq6TbtinQ5hyXvrKPSUiJ8MFZrb19SDD7zEo0NIDiOPfDdmTSObppjqpSw' },
        { id: 7, name: 'Campus Camp Clint Sneakers For Men', price: 999, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMFvh4lyLMsEKgjDiWxMEuwiyv-H_4JA6K0kMXUU_M9HoPIjepEXAFZvR0Q7ybimMWts4ygJst91nu1qyBiEJKzdbb9t3P8nzOSYnXuVM2JUrrcH30-CElHw' },
        { id: 8, name: "Puma Women's X-Ray 2 Square Sneaker", price: 3839, img: 'https://m.media-amazon.com/images/I/51pg9fB9L3L._SY500_.jpg' },
        { id: 9, name: 'Adidas Men Trainers Ownthegame Shoes', price: 4200, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ11PE10NlsLIyIVvmBlvwWVL_u2JOya9blFrVWx7lXpylL0jQcHIHYYuppyfoymkasBeYdebjHjagEwARkh7i3H5AdMWXMfm1PuzY74TGNG2HdYeLjYneJ' },
        { id: 10, name: 'Puma Skyrocket Lite Alt Running Shoes For Men', price: 3499, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTN32cVSsv-7r7B_0UJcwnqdrnc6OtYdiuffalsd2isZTG4urZlFdV3NuhNYWHWb_Ay6aLJoZhlOJBRm-alJbucooUHkZid3nL4qGLl1ywOi2S2PegKFMfqiw' },
        { id: 11, name: "DHgate's Running Shoes for Men and Women", price: 2903, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWgrUj37c2iGJEnSGQCLuSuiBoOSn5orhQjKvUa_SxMjauBLC-oxp0gSLaylAoYKBOntsfDNdbRaeOKec-5y-1lklvW0qnfJ8GIcFEbDnD' },
        { id: 12, name: 'adidas Unisex Duramo Running Shoes', price: 2156, img: 'https://m.media-amazon.com/images/I/51AQVhWkITL._SX500_.jpg' }

    ]); 
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};
