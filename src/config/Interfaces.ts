import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface UserInterface {
  id: number;
  nom_user: string;
  prenom_user: string;
  login_user: string;
  etat_user: number;
  partenaire_id: number;
  user_id: number | null;
  user_edite_id: number | null;
  user_supprime_id: number | null;
  supprime_user: number;
  date_supprime: string | null;
  created_at: string;
  updated_at: string;
  nom_admin: string;
  prenom_admin: string;
  isAdmin: number
}

export interface InviteInterface {
  id: number;
  nom_complet_invite: string;
  telephone_invite: string;
  situation_invite: string;
  habitation_invite: string;
  etat_invite: number;
  partenaire_id: number;
  nombre_place: number;
  user_id: number;
  user_edite_id: number | null;
  user_supprime_id: number | null;
  supprime_invite: number;
  date_supprime: string | null;
  created_at: string;
  updated_at: string;
  nom_admin: string;
  prenom_admin: string;
  carte_id?: number;
  carte: string | null;
  carte_presence?: number;
  etat_carte: number | null;
  table?: string;
  table_id?: number;
  lien_invite: string;
  presence_samedi?: number;
  presence_dimanche?: number;
  user_valid_nom?: string;
  user_valid_prenom?: string;
  date_valid?: string;
}

export interface InterfaceCarteInvite {
  invite_1_id?: number;
  invite_2_id?: number;
}

export interface InterfaceCarte {
  id: number;
  numero_carte: string;
  etat_carte: number;
  partenaire_id: number;
  user_id: number;
  user_edite_id: number | null;
  user_supprime_id: number | null;
  supprime_carte: number;
  date_supprime: string | null;
  nom_complet_invite: string | null;
  created_at: string;
  updated_at: string;
  nom_admin: string;
  prenom_admin: string;
}

export interface TablesInterface {
  id: number;
  libelle: string;
  nombre_place: number;
  etat: number;
  jour: string;
  partenaire_id: number;
  user_id: number;
  user_edite_id: number | null;
  user_supprime_id: number | null;
  supprime: number;
  date_supprime: string | null;
  created_at: string;
  updated_at: string;
  nom_admin: string;
  prenom_admin: string;
  affectations: InviteInterface[];
  nombre_place_occupe: number;
}

export interface MessageInterface {
  id: number;
  titre: string;
  contenu?: string;
  dete_debut?: string | Date;
  dete_fin?: string | Date;
  etat: number;
  partenaire_id: number;
  user_id: number;
  user_edite_id: number | null;
  user_supprime_id: number | null;
  supprime: number;
  date_supprime: string | null;
  created_at: string;
  updated_at: string;
  nom_admin: string;
  prenom_admin: string;
}
export interface InterfaceListeMariage {
  partenaire: string;
  description: string[];
  logo: string;
  callback?: () => void;
  links: string[];
  linkIcon?: IconDefinition;
}

export interface MessageCreate {
  id?: number;
  titre?: string;
  contenu?: string;
  date_debut?: string | Date;
  date_fin?: string | Date;
}

export interface InterfaceMessage {
  id: number;
  titre: string;
  contenu: string;
  date_debut: string;
  date_fin: string;
  partenaire_id: number;
  user_id: number;
  user_edite_id: number;
  user_supprime_id: number | null;
  supprime: number;
  date_supprime: string | null;
  created_at: string;
  updated_at: string;
  nom_admin: string;
  prenom_admin: string;
}

export interface InterfaceMouvement {
  id: number;
  nom_complet_invite: string;
  type_mvt: number;
  etat?: string;
  carte?: string;
  table?: string;
  user_id: number;
  user_edite_id: number;
  user_supprime_id: number | null;
  supprime: number;
  date_supprime: string | null;
  created_at: string;
  updated_at: string;
  nom_admin?: string;
  prenom_admin?: string;
}
