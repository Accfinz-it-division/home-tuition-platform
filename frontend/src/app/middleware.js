import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // யூசர் லாகின் ஆகியிருக்காரான்னு Local Storage-ல பாக்க முடியாது (Middleware-ல).
  // அதனால நாம Cookie-ஐ யூஸ் பண்ணுவோம் (அதை அடுத்த ஸ்டெப்புல செட் பண்ணுவோம்).
  // இப்போதைக்கு நாம பாத்-ஐ மட்டும் செக் பண்ணுவோம்.
  
  const path = url.pathname;
  
  // டாஷ்போர்டு பாத்-ஐ செக் பண்றோம்
  if (path.startsWith('/dashboard')) {
    
    // Cookie-லேர்ந்து யூசர் ரோலை எடுக்கிறோம்
    const userRole = request.cookies.get('userRole')?.value;
    
    // ஒருவேளை லாகின் ஆகலைனா (ரோல் இல்லைனா), லாகின் பேஜ்க்கு அனுப்பு
    if (!userRole) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    // யூசர் ரோல்-க்கு ஏத்த மாதிரி தான் அந்த பேஜ்-க்கு உள்ளே போக முடியும்
    if (path.startsWith('/dashboard/student') && userRole !== 'STUDENT') {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    if (path.startsWith('/dashboard/teacher') && userRole !== 'TEACHER') {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    if (path.startsWith('/dashboard/parent') && userRole !== 'PARENT') {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    if (path.startsWith('/dashboard/admin') && userRole !== 'ADMIN') {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// எந்த பாத்துக்கெல்லாம் இந்த மிடில்வேர் வேலை செய்யணும்
export const config = {
  matcher: '/dashboard/:path*',
};