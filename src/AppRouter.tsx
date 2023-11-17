// import { createSignal } from 'solid-js'
import { Router, Route, Routes, Navigate } from '@solidjs/router';
import { CreateMemePage } from '@/pages/CreateMemePage';
import { TranslateMemePage } from '@/pages/TranslateMemePage';

const PATHS = {
  translate: '/translation',
  create: '/creation',
  unfound: '/unfound',
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate href={PATHS.translate} />} />
        <Route path={PATHS.translate} component={TranslateMemePage} />
        <Route path={PATHS.create} component={CreateMemePage} />
        <Route path={PATHS.unfound} component={() => <div>404</div>}  />
        <Route path="/*" element={<Navigate href={PATHS.unfound} />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;
