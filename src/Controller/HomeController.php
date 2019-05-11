<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\SkillRepository;
use App\Repository\WorkRepository;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends AbstractController
{
    /**
     * Permet d'afficher les compétences et le formulaire de contact
     * 
     * @Route("/", name="home")
     */
    public function index(SkillRepository $repo, WorkRepository $workRepo, Request $request, \Swift_Mailer $mailer)
    {
        $skills = $repo->findAll();
        $works = $workRepo->findAll();

        $contact = new Contact();

        $form = $this->createForm(ContactType::class, $contact);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $subject = $contact->getSubject();
            $email = $contact->getEmail();
            $message = $contact->getMessage();

            $message = (new \Swift_Message())
                ->setSubject($subject)
                ->setFrom($email)
                ->setTo(array('lrxgregory@gmail.com' => 'Grégory Leroux Développeur Web'))
                ->setBody($message)
                ;

            $mailer->send($message);

            $this->addFlash(
                'success',
                "Email envoyé avec succès"
            );

            return $this->redirectToRoute('home');
        }

        return $this->render('home/home.html.twig', [
            'skills' => $skills,
            'works' => $works,
            'form' => $form->createView()
        ]);
    }
}
