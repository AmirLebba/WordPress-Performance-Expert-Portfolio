'use client';
import { Service } from '@/app/lib/types';

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const { icon: Icon, title, description, features, price, note } = service;

  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon />
      </div>

      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>

      <ul className="service-features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="service-price">${price.toLocaleString()}</div>
      <div className="service-price-note">{note}</div>

      <button className="cta-button w-full">Get Started</button>
    </div>
  );
}