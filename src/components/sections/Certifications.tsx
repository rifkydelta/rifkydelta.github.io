import React from 'react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Memulai Pemrograman dengan Dart',
    issuer: 'Dicoding Indonesia',
    date: 'October 2024',
    expiryDate: 'October 2027',
    credentialId: '4EXG7Q791PRL',
    url: 'https://www.dicoding.com/certificates/4EXG7Q791PRL'
  },
  {
    id: 2,
    title: 'Belajar Fundamental Aplikasi Android',
    issuer: 'Dicoding Indonesia',
    date: 'June 2024',
    expiryDate: 'June 2027',
    credentialId: 'ERZR125DQZYV',
    url: 'https://www.dicoding.com/certificates/ERZR125DQZYV'
  },
  {
    id: 3,
    title: 'Belajar Pengembangan Aplikasi Android Intermediate',
    issuer: 'Dicoding Indonesia',
    date: 'June 2024',
    expiryDate: 'June 2027',
    credentialId: '4EXGQ1OJDZRL',
    url: 'https://www.dicoding.com/certificates/4EXGQ1OJDZRL'
  },
  {
    id: 4,
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: 'April 2024',
    expiryDate: 'April 2027',
    credentialId: 'ERZR145QQZYV',
    url: 'https://www.dicoding.com/certificates/ERZR145QQZYV'
  },
  {
    id: 5,
    title: 'Belajar Penerapan Machine Learning untuk Android',
    issuer: 'Dicoding Indonesia',
    date: 'April 2024',
    expiryDate: 'April 2027',
    credentialId: '0LZ061ML3Z65',
    url: 'https://www.dicoding.com/certificates/0LZ061ML3Z65'
  },
  {
    id: 6,
    title: 'Belajar Prinsip Pemrograman SOLID',
    issuer: 'Dicoding Indonesia',
    date: 'April 2024',
    expiryDate: 'April 2027',
    credentialId: 'JMZV3Q8LOPN9',
    url: 'https://www.dicoding.com/certificates/JMZV3Q8LOPN9'
  },
  {
    id: 7,
    title: 'Belajar Membuat Aplikasi Android untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: 'March 2024',
    expiryDate: 'March 2027',
    credentialId: '4EXGKL3OQZRL',
    url: 'https://www.dicoding.com/certificates/4EXGKL3OQZRL'
  },
  {
    id: 8,
    title: 'Belajar Dasar Git dengan GitHub',
    issuer: 'Dicoding Indonesia',
    date: 'February 2024',
    expiryDate: 'February 2027',
    credentialId: 'N9ZOOLYY6ZG5',
    url: 'https://www.dicoding.com/certificates/N9ZOOLYY6ZG5'
  },
  {
    id: 9,
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Indonesia',
    date: 'February 2024',
    expiryDate: 'February 2027',
    credentialId: 'GRX5QWK5YZ0M',
    url: 'https://www.dicoding.com/certificates/GRX5QWK5YZ0M'
  },
  {
    id: 10,
    title: 'Memulai Pemrograman dengan Kotlin',
    issuer: 'Dicoding Indonesia',
    date: 'February 2024',
    expiryDate: 'February 2027',
    credentialId: 'KEXL8W3DYZG2',
    url: 'https://www.dicoding.com/certificates/KEXL8W3DYZG2'
  },
  {
    id: 11,
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    issuer: 'Dicoding Indonesia',
    date: 'February 2024',
    expiryDate: 'February 2027',
    credentialId: 'EYX40QQMRPDL',
    url: 'https://www.dicoding.com/certificates/EYX40QQMRPDL'
  },
  {
    id: 12,
    title: 'Belajar Dasar UX Design',
    issuer: 'Dicoding Indonesia',
    date: 'October 2023',
    expiryDate: 'October 2026',
    credentialId: '53XE43WOYZRN',
    url: 'https://www.dicoding.com/certificates/53XE43WOYZRN'
  },
  {
    id: 13,
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: 'August 2023',
    expiryDate: 'August 2026',
    credentialId: 'QLZ9QE0OEZ5D',
    url: 'https://www.dicoding.com/certificates/QLZ9QE0OEZ5D'
  },
  {
    id: 14,
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia',
    date: 'July 2023',
    expiryDate: 'July 2026',
    credentialId: '1RXY67453ZVM',
    url: 'https://www.dicoding.com/certificates/1RXY67453ZVM'
  },
  {
    id: 15,
    title: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    date: 'July 2023',
    expiryDate: 'July 2026',
    credentialId: '07Z6VM31MXQR',
    url: 'https://www.dicoding.com/certificates/07Z6VM31MXQR'
  },
  {
    id: 16,
    title: 'JLPT N5',
    issuer: 'The Japan Foundation',
    date: 'January 2023',
    credentialId: 'N5A3091594'
  },
  {
    id: 17,
    title: 'KELAS "FOTO JURNALISTIK: CERITA DENGAN CITRA"',
    issuer: 'Tempo Institute',
    date: 'September 2022',
    credentialId: 'K143711',
    url: 'https://tempoinstitute.com/sertifikat/K143711'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="heading-secondary mb-8 reveal">
          Certified <span className="text-gradient">Growth</span>
        </h2>
        
        <div className="space-y-4 reveal">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface rounded-lg"
            >
              <div>
                <h3 className="font-medium text-white">{cert.title}</h3>
                <p className="text-sm text-neutral-400">
                  {cert.issuer} • {cert.date}
                  {cert.expiryDate && ` - ${cert.expiryDate}`}
                </p>
                <p className="text-sm text-neutral-500">ID: {cert.credentialId}</p>
              </div>
              {cert.url ? (
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-light mt-2 sm:mt-0"
                >
                  <span className="text-sm">View Certificate</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-sm text-neutral-500 mt-2 sm:mt-0">Certificate Available Offline</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;