import React from 'react';

const ThemePage = () => {
    return (
        <div>
            <div className="doc-intro">
                <h1>Meet the Team</h1>
                <p>
                    <a href="https://www.primetek.com.tr" className="text-primary hover:underline font-semibold">
                        PrimeTek
                    </a>{' '}
                    is a world renowned vendor of popular UI Component suites including{' '}
                    <a href="https://primefaces.org" className="text-primary hover:underline font-semibold">
                        PrimeFaces
                    </a>
                    ,{' '}
                    <a href="https://primeng.org" className="text-primary hover:underline font-semibold">
                        PrimeNG
                    </a>
                    ,{' '}
                    <a href="https://primereact.org" className="text-primary hover:underline font-semibold">
                        PrimeReact
                    </a>{' '}
                    and{' '}
                    <a href="https://primevue.org" className="text-primary hover:underline font-semibold">
                        PrimeVue
                    </a>
                    . All the members in our team are full time employees of PrimeTek who share the same passion and vision for open source to create awesome UI libraries.
                </p>
            </div>

            <div className="card p-8">
                <div className="flex flex-wrap gap-6 justify-content-even">
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/cagatay.jpg" className="border-circle mb-4" alt="Cagatay Civici" />
                        <span className="mb-2 text-lg font-bold">Çağatay Çivici</span>
                        <span className="text-sm">Founder</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/mert.jpg" className="border-circle mb-4" alt="Mert Sincan" />
                        <span className="mb-2 text-lg font-bold">Mert Sincan</span>
                        <span className="text-sm">CTO</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/onur.jpg" className="border-circle mb-4" alt="Onur Şentüre" />
                        <span className="mb-2 text-lg font-bold">Onur Şentüre</span>
                        <span className="text-sm">Design Lead</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/dilara.jpg" className="border-circle mb-4" alt="Dilara Can" />
                        <span className="mb-2 text-lg font-bold">Dilara Güngenci</span>
                        <span className="text-sm">Business Administration</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/cetin.jpg" className="border-circle mb-4" alt="Çetin Çakıroğlu" />
                        <span className="mb-2 text-lg font-bold">Çetin Çakıroğlu</span>
                        <span className="text-sm">Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/tugce.jpg" className="border-circle mb-4" alt="Tuğçe Küçükoğlu" />
                        <span className="mb-2 text-lg font-bold">Tuğçe Küçükoğlu</span>
                        <span className="text-sm">Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/atakan.jpg" className="border-circle mb-4" alt="Atakan Tepe" />
                        <span className="mb-2 text-lg font-bold">Atakan Tepe</span>
                        <span className="text-sm">Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/kerem.jpg" className="border-circle mb-4" alt="Kerem Yıldan" />
                        <span className="mb-2 text-lg font-bold">Kerem Yıldan</span>
                        <span className="text-sm">UI/UX Designer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/ulas.jpg" className="border-circle mb-4" alt="Ulaş Turan" />
                        <span className="mb-2 text-lg font-bold">Ulaş Turan</span>
                        <span className="text-sm">Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/bugra.jpg" className="border-circle mb-4" alt="Buğra Beydüz" />
                        <span className="mb-2 text-lg font-bold">Buğra Beydüz</span>
                        <span className="text-sm">Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/bahadir.jpg" className="border-circle mb-4" alt="Bahadır Sofuoğlu" />
                        <span className="mb-2 text-lg font-bold">Bahadır Sofuoğlu</span>
                        <span className="text-sm">Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/aliriza.jpg" className="border-circle mb-4" alt="Alirıza Gücal" />
                        <span className="mb-2 text-lg font-bold">Ali Rıza Gücal</span>
                        <span className="text-sm">Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primeflex/images/team/olgu.jpg" className="border-circle mb-4" alt="Olgu Başak" />
                        <span className="mb-2 text-lg font-bold">Olgu Başak</span>
                        <span className="text-sm">Java Web Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemePage;
