export interface TokenPayload {
  name?: string;
  [key: string]: any;
}
  
export function extractClaimsFromToken(token: string): TokenPayload | null {
  try {
    // JWT consists of three parts: header, payload and signature
    const [, payloadBase64] = token.split('.');
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (error) {
    return null;
  }
}