-- Nettoyage des tables existantes
TRUNCATE TABLE users, educations, skills, languages, interests, associations, projects, experiences CASCADE;

-- Réinitialisation des séquences
ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE educations_id_seq RESTART WITH 1;
ALTER SEQUENCE skills_id_seq RESTART WITH 1;
ALTER SEQUENCE languages_id_seq RESTART WITH 1;
ALTER SEQUENCE interests_id_seq RESTART WITH 1;
ALTER SEQUENCE associations_id_seq RESTART WITH 1;
ALTER SEQUENCE projects_id_seq RESTART WITH 1;
ALTER SEQUENCE experiences_id_seq RESTART WITH 1;

-- Insertion de l'utilisateur
INSERT INTO users (name, title, bio, photo_url, email, linkedin, github, cv_url)
VALUES (
    'Mamadou Alpha Diallo',
    'Ingénieur Logiciel en alternance (M1-M2)',
    'Étudiant en Master d''ingénierie logicielle avec un parcours entre la France et le Canada, passionné par le développement web, DevOps, cloud et IA générative. Je mets mes compétences fullstack et ma rigueur au service de projets concrets.',
    '/assets/photo-profil.jpg',
    'mamadou-alpha.diallo@etudiant.univ-rennes.fr',
    'https://linkedin.com/in/alpha-dklg',
    'https://github.com/madia472',
    '/assets/documents/MamadouAlpha_Diallo_CV_Alternance2025.pdf'
);

-- Insertion des formations
INSERT INTO educations (degree, institution, country, start_date, end_date, grade, description) VALUES
('Licence 3 Informatique', 'Université Laval', 'Canada', '2024-09-01', '2025-05-31', 'Bien', 'Échange universitaire avec Rennes 1. Cours : développement web avancé, compilation, qualité logicielle, cybersécurité, IA.'),
('Licence 1 & 2 Informatique – Parcours ISTN', 'Université de Rennes 1', 'France', '2022-09-01', '2024-05-31', 'Bien', 'POO Java, développement web, génie logiciel, bases de données, réseaux, IA.'),
('Licence 1 Sciences de l''Éducation', 'Université Rennes 2', 'France', '2021-09-01', '2022-06-30', 'Bien', 'Année de transition post-arrivée en France, renforcement de la rigueur universitaire.'),
('Double cursus : Informatique & Sciences de l''Éducation', 'Université Barack Obama & ISSEG', 'Guinée', '2019-10-01', '2021-06-30', 'Bien', 'Initiation à la programmation (C, HTML/CSS), algorithmique, mathématiques appliquées.');

-- Insertion des compétences
INSERT INTO skills (name, category, level) VALUES
('Java', 'Backend', 'Avancé'),
('Spring Boot', 'Backend', 'Avancé'),
('React', 'Frontend', 'Intermédiaire'),
('NestJS', 'Backend', 'Intermédiaire'),
('Angular', 'Frontend', 'Intermédiaire'),
('Docker', 'DevOps', 'Intermédiaire'),
('Git', 'Outils', 'Avancé'),
('PostgreSQL', 'Base de données', 'Intermédiaire'),
('UML', 'Modélisation', 'Intermédiaire');

-- Insertion des langues
INSERT INTO languages (name, level) VALUES
('Français', 'Courant'),
('Anglais', 'Professionnel'),
('Poular', 'Natif');

-- Insertion des intérêts
INSERT INTO interests (title, description) VALUES
('Veille technologique', 'Suivi des nouveautés du web, IA, cybersécurité, cloud. Tests réguliers d''outils comme GitHub Copilot, ChatGPT.'),
('Voyage & découverte culturelle', 'Expérience internationale (France, Canada, Guinée). Passion pour les échanges multiculturels.'),
('Sport', '10+ ans de football, musculation et basket-ball réguliers pour discipline, esprit d''équipe et bien-être.');

-- Insertion des associations
INSERT INTO associations (name, role, start_date, end_date, description) VALUES
('AG35 – Association des Guinéens d''Ille-et-Vilaine', 'Responsable des affaires étudiantes', '2024-01-01', '2025-12-31', 'Accueil et orientation des étudiants guinéens à Rennes. Organisation d''événements. Vainqueur CAN Rennes 2024.'),
('UJOD – Union des Jeunes de la Sous-préfecture d''Origine', 'Membre actif', '2019-01-01', '2021-06-30', 'Engagement citoyen en Guinée. Initiatives locales pour le développement de la région d''origine.');

-- Insertion des projets
INSERT INTO projects (title, description, technologies, link, grade, in_production) VALUES
('Ugram', 'Réseau social type Instagram développé avec React, NestJS et AWS. Projet fullstack avec mise en production et CI/CD.', 'React, NestJS, TypeScript, AWS, Docker, GitHub Actions', 'https://github.com/madia472/ugram', '111%', true),
('uFood', 'Application web pour rechercher, évaluer et partager des restaurants entre amis. Conception UI et développement front.', 'HTML, CSS, JavaScript, Bootstrap, Vue.js, Node.js', '', '95%', false),
('Choix Carburant', 'Application Java desktop pour comparer les stations-service. Gestion des données et interface Swing.', 'Java, Swing, UML, Scrum', '', '16/20', false),
('Ulavalgo', 'Logiciel de gestion de festival (billetterie, transport). Architecture hexagonale, principes SOLID, REST API.', 'Java, REST, Architecture hexagonale, SOLID', '', '75%', false),
('Projet CNC / Scie à panneau', 'Modélisation orientée objet et codage pour la gestion des coupes CNC. UML et implémentation Java.', 'Java, UML, Visual Paradigm', '', '', false),
('StarMap', 'Calcul d''itinéraires pour le réseau STAR de Rennes avec API Google Maps. Algorithmes et géolocalisation.', 'Scala, Google Maps API, STAR Open Data', '', '', false),
('Slay the Spire', 'Jeu de cartes stratégique en Java (deck-building, combats, interface graphique).', 'Java, Swing', '', '20/20', false),
('Compilateur simplifié', 'Création complète d''un compilateur (analyse lexicale à génération de code). Étude comparative Java.', 'C#, grammaire formelle, ANTLR, Java', '', '95%', false),
('Simulation de lucioles', 'Simulation du comportement collectif d''agents en Java. Biologie, cycles synchrones.', 'Java, modélisation comportementale', '', '', false),
('TaxiMeubles', 'Simulation de startup pour transport de meubles entre particuliers. Pitch, business model et coordination d''équipe.', 'Étude de marché, analyse concurrentielle, modélisation', '', '92%', false),
('Trousseau IA générative', 'Guide stratégique de 10 outils d''IA générative pour étudiants SIO. Catégorisation et rédaction de fiches pratiques.', 'ChatGPT, Notion AI, GitHub Copilot', '', '90%', false),
('Étude de gestion des risques – MonPortail', 'Évaluation des risques d''un SI universitaire selon ISO/CEI 27001. Démarche sécurité rigoureuse.', 'ISO/CEI 27001, cybersécurité, analyse de risque', '', '93%', false);

-- Insertion des expériences
INSERT INTO experiences (title, company, location, start_date, end_date, description, type) VALUES
('Stagiaire Développeur Web', 'Santigui du Moulin', 'Rennes, France', '2025-05-01', '2025-07-01', 'Développement du site e-commerce de l''entreprise : affichage dynamique, prise de commande, gestion des stocks. Stack : Angular + Spring Boot.', 'Stage'); 