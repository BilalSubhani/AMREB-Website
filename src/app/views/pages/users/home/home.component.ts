import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

export interface ContactInfo {
  icon: string;
  title: string;
  details: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Urban Nest';

  services: Service[] = [
    {
      title: 'Buy',
      description: 'Find your perfect home with our extensive listings.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDve6_xm70q402r8hSxfYTUg29B5Z3FuqKH_MJkZz6CvZbc6oZQIhZCOdCHIEsUQETF-62k2cx_Ac5wvSvk4BEMbGKbbaCd23VLgZ0UEeNY3UQzjjc-Fnr3mvJYFoTVywatUvP3s2CvKnNYwB0bAA33IwV4KMglPbdKde2WD9eV6VYkTQXxYKLYf7I3QT45_7-71NL7TW4fa_jp9V_Sv5ZOznXTTOKwfvPTV1eTBnZwZqohJtYkQcAMMC_QE2-Q3-4iMQh6cWC5g2uG',
    },
    {
      title: 'Rent',
      description: 'Explore rental properties that fit your lifestyle.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDp-QJEeECl-e7F8UdBZRCI38v-UMg5AH4iKzzh2jLBLJ8bcKE43j5LLBJwBWhCsore0dymMSbArVQZ3zHtG53IPlFrh82-ZJFIAzaB1eBDPxO9vPojZs0lag6_d1j8-azaew2Q_y6UK-vgxiHO--CNA6IeucgJ2M3Fdng207KM2iJu_3dCmBpyNGrrdo45I_oNZbA_q8WHrJnositJB7Ufw0mkqpl79F2r2vtdOENMWNMWpto40pR3V7zK7Xvu3iUx4JNfAkq3XZdw',
    },
    {
      title: 'Sell',
      description:
        'Get the best value for your property with our expert guidance.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCea_hFzy8NEOPROANMA0IQg1R20Eudi3ZgpfYfUy45tzgASNO1k-2NG8kzV_ejU1B8YxKPh5LNjK3hlYV_iqAtiaLM2_ygHy3wQbYZyNjt3u8KM9GSBwdlpUOlO6gl5kLuZ6q6tteWkq70sEjbxZQvS3v6QM-onByGiTy_JwMiif0JDPdxpW7opXHk1jURmNzduWnmLqlfzRCOKBRct_KRsuaoF519AONgOb7-xQ893tYeFJFUI1UZudG5GjeAZ5iGi2IrwwL2TbjV',
    },
    {
      title: 'Architectural Consultancy',
      description:
        'Design your dream space with our professional architectural services.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDzaOdF_xwUPkxzpMdmdBvqIBBgOmafCJfiwxukfjeqxYL1O8To3nj4dowlLZlXFt0vszLMSVvdiVA3WHWIOYfCb2z1TYjn4DtQmoOmlZDaWTr2h670mAQbSQnZW8HLhQYdOGNm1cppYJ0XCTVEL0WadlLWAthS2aipDYWgipO66pfxn7ei7ypvrHMCPS9UAIwkGQ-xol0CdgzlMgvCdPM4chWhIiMtpAUn5CkrHoQthsGhF_xrBuCidL1VwLoGBBG5QMWxqEyxR6qV',
    },
  ];

  faqs: FAQ[] = [
    {
      question: 'How do I start the buying process?',
      answer:
        'To begin the buying process, you can browse our property listings online or contact us directly to discuss your requirements and preferences. Our agents will guide you through every step, from property search to closing.',
      isOpen: true,
    },
    {
      question: 'What is the process for selling my property?',
      answer:
        'To begin the buying process, you can browse our property listings online or contact us directly to discuss your requirements and preferences. Our agents will guide you through every step, from property search to closing.',
      isOpen: false,
    },
    {
      question: 'What architectural services do you offer?',
      answer:
        'To begin the buying process, you can browse our property listings online or contact us directly to discuss your requirements and preferences. Our agents will guide you through every step, from property search to closing.',
      isOpen: false,
    },
  ];

  contactInfo: ContactInfo[] = [
    {
      icon: 'map-pin',
      title: 'Address',
      details: '123 Elm Street, Anytown, USA',
    },
    {
      icon: 'phone',
      title: 'Phone',
      details: '+1 (555) 123-4567',
    },
    {
      icon: 'envelope',
      title: 'Email',
      details: 'info@urbannest.com',
    },
  ];

  navigationItems = ['Buy', 'Rent', 'Sell', 'Architecture', 'About Us'];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  onContactClick(): void {
    // Handle contact button click
    console.log('Contact button clicked');
  }

  onBrowsePropertiesClick(): void {
    // Handle browse properties button click
    console.log('Browse properties button clicked');
  }

  onNavigationClick(item: string): void {
    // Handle navigation click
    console.log(`Navigation clicked: ${item}`);
  }
}
