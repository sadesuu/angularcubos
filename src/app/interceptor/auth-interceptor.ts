import { HttpInterceptorFn } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(SKIP_TOKEN)) {
    return next(req);
  }
  const token = sessionStorage.getItem('TOKEN');
  if (token) {
    const tokenRequest = req.clone({
      setHeaders: {
        Authorization: 'bearer ' + token,
      },
    });
    return next(tokenRequest);
  }
  return next(req);
};
