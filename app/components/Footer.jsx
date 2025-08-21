export default function Footer() {
    return (
        <footer className="mt-16 border-t border-sand/40">
            <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-charcoal/80">
                <p>© {new Date().getFullYear()} Pottery Craft — Handmade ceramics with love.</p>
            </div>
        </footer>
    );
}