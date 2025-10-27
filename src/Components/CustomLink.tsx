'use client';

import Link from 'next/link';
import { useState, ReactNode, MouseEvent, useEffect } from 'react';
import { LoadingScreen } from '@/index';
import { useRouter, usePathname } from 'next/navigation';
import type { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

// Combinar LinkProps con atributos HTML del anchor
interface CustomLinkProps extends Omit<LinkProps, 'href'>, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
    href: string;
    children: ReactNode;
}

export function CustomLink({ href, children, ...props }: CustomLinkProps) {
    const router = useRouter();
    const currentPathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    
    // Normalizar las URLs para comparación
    const normalizeUrl = (url: string): string => {
        // Eliminar cualquier hash o query string para la comparación
        const hrefWithoutHash = url.split('#')[0].split('?')[0];
        
        // Eliminar slash final si existe
        return hrefWithoutHash.endsWith('/') 
            ? hrefWithoutHash.slice(0, -1) 
            : hrefWithoutHash;
    };
    
    // Este efecto detecta cambios en la ruta y desactiva el loading
    useEffect(() => {
        if (isLoading) {
            setIsLoading(false);
        }
    }, [currentPathname, isLoading]);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Extraer la ruta del href (ya es string)
        let targetPath = href;
        
        // Si es una ruta relativa, resolverla
        if (!href.startsWith('http') && !href.startsWith('/')) {
            // Construir ruta completa para rutas relativas
            const basePath = currentPathname.split('/').slice(0, -1).join('/');
            targetPath = `${basePath}/${href}`;
        }
        
        const normalizedCurrent = normalizeUrl(currentPathname);
        const normalizedTarget = normalizeUrl(targetPath);
        
        // No activar para enlaces externos o anclas
        if (href.startsWith('http') || href.startsWith('#')) {
            return; // Permitir comportamiento normal del enlace
        }
        
        // Verificación mejorada para la misma ruta
        if (normalizedCurrent === normalizedTarget) {
            e.preventDefault();
            console.log('Misma ruta detectada, evitando navegación');
            return;
        }

        // Si llegamos aquí, es una navegación interna a una ruta diferente
        e.preventDefault();
        setIsLoading(true);
        router.push(href);
    };

    return (
        <>
            {isLoading && 
                <div className="fixed inset-0 z-50 bg-white">
                    <LoadingScreen />
                </div>
            }
            <Link href={href} onClick={handleClick} {...props}>
                {children}
            </Link>
        </>
    );
}