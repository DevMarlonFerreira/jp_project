import { container } from 'tsyringe';
import BcryptHashProvider from './HashProvider/implementations/BcryptHashProvider';
import { IHashProvider } from './HashProvider/models/IHashPovider';
import JwtProvider from './TokenProvider/implementations/JwtProvider';
import { ITokenProvider } from './TokenProvider/models/ITokenProvider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
container.registerSingleton<ITokenProvider>('TokenProvider', JwtProvider);