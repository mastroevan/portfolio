import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

// Record 1% of production sessions
const METICULOUS_SAMPLING_RATE = 0.01;

function isProduction() {
  // Update this with your production domain
  return window.location.hostname.indexOf("your-production-site.com") > -1;
}

async function startApp() {
  if (!isProduction() || Math.random() < METICULOUS_SAMPLING_RATE) {
    await tryLoadAndStartRecorder({
      recordingToken: 'Hel0XwqO8mzS9X6qPhBC1fAUmp2eOgjnDUzLaVCd',
      isProduction: isProduction(),
      maxMsToBlockFor: isProduction() ? 250 : undefined,
    });
  }

  // ✅ React 18 createRoot replacement for ReactDOM.render
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Start everything
startApp();