/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveSection =
  | 'home'
  | 'about'
  | 'services'
  | 'engineering'
  | 'digital'
  | 'deco'
  | 'contact';

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  division: 'engineering' | 'digital' | 'deco' | 'general';
  service: string;
  message: string;
  projectSize: 'small' | 'medium' | 'large' | 'enterprise';
  budget: string;
}

export interface QuoteEstimate {
  id: string;
  subtotal: number;
  vat: number;
  total: number;
  items: Array<{ description: string; cost: number }>;
  notes: string;
}
