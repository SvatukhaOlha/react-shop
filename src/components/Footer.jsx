import React from 'react'

function Footer() {
    return (
      <footer className='page-footer green lighten-4'>
        <div className='footer-copyright'>
          <div className='container'>
            {new Date().getFullYear()} Copyright Text
            <a
              href='https://github.com/SvatukhaOlha/react-shop'
              className='grey-text text-lighten-4 right'
              target='_blank'
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer
