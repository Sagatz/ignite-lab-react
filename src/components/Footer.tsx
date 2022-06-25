import { FooterLogo } from "./RocketseatLogo"

export function Footer() {
    return(
        <footer className="w-full bg-gray-900 flex items-center text-gray-400 border-t border-gray-600 relative bottom-0 h-6 p-10 mt-24 gap-8">
            <FooterLogo />
            <p>Rocketseat - Todos os direitos reservados</p>
            <p className="ml-auto">Políticas de privacidade</p>
        </footer>
    )
}