import { Form, Container } from "react-bootstrap"
const Buscador = ({ categoria, pais, handleCategoria, handlePais }) => {
    const paises = {
        "Afghanistan": "af",
        "Albania": "al",
        "Algeria": "dz",
        "Angola": "ao",
        "Argentina": "ar",
        "Australia": "au",
        "Austria": "at",
        "Azerbaijan": "az",
        "Bahrain": "bh",
        "Bangladesh": "bd",
        "Barbados": "bb",
        "Belarus": "by",
        "Belgium": "be",
        "Bermuda": "bm",
        "Bhutan": "bt",
        "Bolivia": "bo",
        "Bosnia And Herzegovina": "ba",
        "Brazil": "br",
        "Brunei": "bn",
        "Bulgaria": "bg",
        "Burkina Fasco": "bf",
        "Cambodia": "kh",
        "Cameroon": "cm",
        "Canada": "ca",
        "Cape Verde": "cv",
        "Cayman Islands": "ky",
        "Chile": "cl",
        "China": "cn",
        "Colombia": "co",
        "Comoros": "km",
        "Costa Rica": "cr",
        "Côte d'Ivoire": "ci",
        "Croatia": "hr",
        "Cuba": "cu",
        "Cyprus": "cy",
        "Czech Republic": "cz",
        "Denmark": "dk",
        "Djibouti": "dj",
        "Dominica": "dm",
        "Dominican Republic": "do",
        "DR Congo": "cd",
        "Ecuador": "ec",
        "Egypt": "eg",
        "El Salvador": "sv",
        "Estonia": "ee",
        "Ethiopia": "et",
        "Fiji": "fj",
        "Finland": "fi",
        "France": "fr",
        "French Polynesia": "pf",
        "Gabon": "ga",
        "Georgia": "ge",
        "Germany": "de",
        "Ghana": "gh",
        "Greece": "gr",
        "Guatemala": "gt",
        "Guinea": "gn",
        "Haiti": "ht",
        "Honduras": "hn",
        "Hong Kong": "hk",
        "Hungary": "hu",
        "Iceland": "is",
        "India": "in",
        "Indonesia": "id",
        "Iraq": "iq",
        "Ireland": "ie",
        "Israel": "il",
        "Italy": "it",
        "Jamaica": "jm",
        "Japan": "jp",
        "Jordan": "jo",
        "Kazakhstan": "kz",
        "Kenya": "ke",
        "Kuwait": "kw",
        "Kyrgyzstan": "kg",
        "Latvia": "lv",
        "Lebanon": "lb",
        "Libya": "ly",
        "Lithuania": "lt",
        "Luxembourg": "lu",
        "Macau": "mo",
        "Macedonia": "mk",
        "Madagascar": "mg",
        "Malawi": "mw",
        "Malaysia": "my",
        "Maldives": "mv",
        "Mali": "ml",
        "Malta": "mt",
        "Mauritania": "mr",
        "Mexico": "mx",
        "Moldova": "md",
        "Mongolia": "mn",
        "Montenegro": "me",
        "Morocco": "ma",
        "Mozambique": "mz",
        "Myanmar": "mm",
        "Namibia": "na",
        "Nepal": "np",
        "Netherlands": "nl",
        "New Zealand": "nz",
        "Niger": "ne",
        "Nigeria": "ng",
        "North Korea": "kp",
        "Norway": "no",
        "Oman": "om",
        "Pakistan": "pk",
        "Panama": "pa",
        "Paraguay": "py",
        "Peru": "pe",
        "Philippines": "ph",
        "Poland": "pl",
        "Portugal": "pt",
        "Puerto Rico": "pr",
        "Romania": "ro",
        "Russia": "ru",
        "Rwanda": "rw",
        "Samoa": "ws",
        "San Marino": "sm",
        "Saudi Arabia": "sa",
        "Senegal": "sn",
        "Serbia": "rs",
        "Singapore": "sg",
        "Slovakia": "sk",
        "Slovenia": "si",
        "Solomon Islands": "sb",
        "Somalia": "so",
        "South Africa": "za",
        "South Korea": "kr",
        "Spain": "es",
        "Sri Lanka": "lk",
        "Sudan": "sd",
        "Sweden": "se",
        "Switzerland": "ch",
        "Syria": "sy",
        "Taiwan": "tw",
        "Tajikistan": "tj",
        "Tanzania": "tz",
        "Thailand": "th",
        "Tonga": "to",
        "Tunisia": "tn",
        "Turkey": "tr",
        "Turkmenistan": "tm",
        "Uganda": "ug",
        "Ukraine": "ua",
        "United Arab Emirates": "ae",
        "United Kingdom": "gb",
        "United States of America": "us",
        "Uruguay": "uy",
        "Uzbekistan": "uz",
        "Venezuela": "ve",
        "Vietnam": "vi",
        "Yemen": "ye",
        "Zambia": "zm",
        "Zimbabwe": "zw"
    };

    return (
        <Container className="py-3">
            <Form>
                <Form.Group className="mb-3" controlId="selectorCategoria">
                    <Form.Label>Buscar por Categoría</Form.Label>
                    <Form.Select value={categoria} onChange={handleCategoria}>
                        <option>Selecciona una opción...</option>
                        <option value="business">Negocios</option>
                        <option value="entertainment">Entretenimiento</option>
                        <option value="environment">Medio ambiente</option>
                        <option value="food">Alimentación</option>
                        <option value="health">Salud</option>
                        <option value="politics">Política</option>
                        <option value="science">Ciencia</option>
                        <option value="sports">Deportes</option>
                        <option value="technology">Tecnología</option>
                        <option value="top">Principales</option>
                        <option value="tourism">Turismo</option>
                        <option value="world">Mundo</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="selectorPais">
                    <Form.Label>Seleccionar País</Form.Label>
                    <Form.Select value={pais} onChange={handlePais}>
                        <option>Selecciona una opción...</option>
                        {Object.entries(paises).map(([nombre, codigo]) => (
                            <option key={codigo} value={codigo}>{nombre}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Buscador;