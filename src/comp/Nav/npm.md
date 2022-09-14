// npm
npm install -g npm-check-updates
// routes
npm i react-router-dom -save
//components
import {NavLink} from 'react-router-dom';
<NavLink to="/messages">Messages</NavLink>
import { Routes, Route, BrowserRouter } from "react-router-dom";
    <BrowserRouter>
      <Header />
      <StyledMainContainer>
        <StyledNav />

        <StyledSectionFeed className="section_profile">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Posts />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </StyledSectionFeed>
      </StyledMainContainer>

      <Footer />
    </BrowserRouter>
