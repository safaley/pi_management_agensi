import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.apsumberglobal.com';

/**
 * Sets document title, meta description, canonical URL,
 * Open Graph / Twitter meta tags, and BreadcrumbList schema
 * dynamically per page.
 */
export function usePageMeta(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;

    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;
    const desc = description || '';

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && desc) {
      metaDesc.setAttribute('content', desc);
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }

    // OG tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': desc,
      'og:url': canonicalUrl,
      'twitter:title': title,
      'twitter:description': desc,
      'twitter:url': canonicalUrl,
    };

    for (const [property, content] of Object.entries(ogTags)) {
      if (!content) continue;
      const el = document.querySelector(`meta[property="${property}"]`);
      if (el) {
        el.setAttribute('content', content);
      }
    }

    // BreadcrumbList schema
    const existingBreadcrumb = document.getElementById('breadcrumb-schema');
    if (existingBreadcrumb) existingBreadcrumb.remove();

    const breadcrumbItems: Array<{ '@type': string; position: number; name: string; item: string }> = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    ];

    if (pathname !== '/') {
      const pageName = title.split('|')[0].trim();
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: canonicalUrl,
      });
    }

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.getElementById('breadcrumb-schema')?.remove();
    };
  }, [title, description, pathname]);
}
